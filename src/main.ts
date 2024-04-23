import * as core from "@actions/core";
import { ErrorCallback } from "typescript";

const main = () => {
    try {
        console.log("Hello World TS");
    } catch (error: ErrorCallback | any) {
        core.setFailed(error.message);
    }
};

main();
