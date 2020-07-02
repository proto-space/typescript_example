async function loadAssets(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Image.png");
        }, 300);
    });
}

function updateAsset(asset: string): string{
    console.log(`Client: Updated asset ${asset}`);
    return asset.replace(".png", ".jpg");
}

async function uploadAssets(asset: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Server: Got asset ${asset}`)
            resolve(Math.random() > 0.7 ? false : true);
        }, 100);
    });
}

(async () => {
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    // Lesson 1:
    // Download the asset, update it and upload it. Last but not least print if the
    // upload was successful

    // CODE START



    // END CODE
})();