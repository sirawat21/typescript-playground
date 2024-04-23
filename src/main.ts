import * as core from "@actions/core";

const main = () => {
    try {
        console.log("Hello World TS");
    } catch (error: ErrorCallback | any) {
        core.setFailed(error.message);
        console.log(error.message);
    }
};

main();
