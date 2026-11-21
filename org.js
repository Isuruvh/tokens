async function verifyOrgMembership(
    token: string,
    requiredOrg: string
): Promise<boolean> {
    const response = await fetch("https://api.github.com/user/orgs", {
        headers: { Authorization: `Bearer ${token}` },
    });
    const orgs = await response.json();
    return orgs.some((org: any) => org.login === requiredOrg);
}

// In your auth flow
const token = await handleOAuthCallback(code);
if (!await verifyOrgMembership(token, "my-company")) {
    throw new Error("User is not a member of the required organization");
}
const client = createClientForUser(token);
