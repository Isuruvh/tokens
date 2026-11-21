// No special SDK configuration needed for EMU
// Enterprise policies are enforced server-side by GitHub
const client = new CopilotClient({
    gitHubToken: emuUserToken,  // Works the same as regular tokens
    useLoggedInUser: false,
});
const clients = new Map<string, CopilotClient>();

function getClientForUser(userId: string, token: string): CopilotClient {
    if (!clients.has(userId)) {
        clients.set(userId, new CopilotClient({
            gitHubToken: token,
            useLoggedInUser: false,
        }));
    }
    return clients.get(userId)!;
}
