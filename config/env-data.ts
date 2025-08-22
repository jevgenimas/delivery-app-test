import * as dotenv from "dotenv";

if (process.env.CI !== "true") {
    dotenv.config({ path: "env/prod.env" });
    console.log("🔧 Running in LOCAL environment");
} else {
    console.log("⚙️ Running in CI environment");
}

const requiredVars = ["URL", "TEST_USERNAME", "TEST_PASSWORD"];

requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
        throw new Error(`Missing required environment variable: ${varName}`);
    }
});

export const SERVICE_URL: string = process.env.URL as string;
export const USERNAME: string = process.env.TEST_USERNAME as string;
export const PASSWORD: string = process.env.TEST_PASSWORD as string;