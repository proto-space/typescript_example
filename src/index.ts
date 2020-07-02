import * as inquirer from 'inquirer';
import { promises as fs} from 'fs';
import * as path from 'path';

process.env.NODE_NO_WARNINGS="1";

(async () => {
  // may get default lesson
  let defaultLesson = null;
  try {
    defaultLesson = JSON.parse((await fs.readFile(path.join(process.cwd(), ".lesson"))).toString());
  } catch(e) {};
  const files = await fs.readdir(path.join(__dirname, "lesson"));

  // transform dir to key/value
  const lessons = files.filter(name => /\.ts$/.test(name)).map(item => {
    const name = item.replace(/\.ts$/, "").replace(/^(\d+)_lesson$/, "Lesson $1").replace(/^(\d+_)/, "");
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value: path.join(__dirname, "lesson", item) 
    }
  });

  // ask session to start
  const lesson = await inquirer.prompt([
    {
      type: 'list',
      name: 'lesson',
      message: "Which lesson do you want to start?",
      choices: lessons,
      default: defaultLesson?.value ?? undefined
    }
  ])

  // set default
  defaultLesson = lessons.find(item => (item.value === lesson.lesson));
  await fs.writeFile(path.join(process.cwd(), ".lesson"), JSON.stringify(defaultLesson));

  // exec session
  console.log(`\n============ ${defaultLesson.name} ============\n`)
  require(defaultLesson.value);
})();