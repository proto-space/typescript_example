class Cat { constructor(public name: string) {} }
class Dog { constructor(public name: string) {} }
class You { constructor(public name: string) {} }


(async () => {
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    // Lesson 2:
    // Change the following list so that you can use it for other classes as well.
    // Dog and You should work fine, but future classes should also work.

    // CODE START

    class CatList {
        items: Cat[] = [];

        add(cat: Cat) {
            this.items.push(cat);
        }

        forEach(fn: (cat: Cat)  => void) {
            this.items.forEach(fn);
        }
    }

    const list = new CatList();
    list.add(new Cat("Catty"));
    list.add(new Cat("Knuddl"));

    console.log("We got the following items:");
    list.forEach((item) => {
        console.log(item);
    });

    // END CODE
})();