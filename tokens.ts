import { CopilotClient } from "@github/copilot-sdk";

// Create a client for an authenticated user
function createClientForUser(userToken: string): CopilotClient {
    return new CopilotClient({
        gitHubToken: userToken,
        useLoggedInUser: false,  // Don't fall back to CLI login
    });
}

// Usage
const client = createClientForUser("gho_user_access_token");
const session = await client.createSession({
    sessionId: `user-${userId}-session`,
    model: "gpt-5.4",
});

const response = await session.sendAndWait({ prompt: "Hello!" });
