// No special SDK configuration needed for EMU
// Enterprise policies are enforced server-side by GitHub
const client = new CopilotClient({
    gitHubToken: emuUserToken,  // Works the same as regular tokens
    useLoggedInUser: false,
});
