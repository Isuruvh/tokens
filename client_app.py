from copilot import CopilotClient
from copilot.session import PermissionHandler

def create_client_for_user(user_token: str) -> CopilotClient:
    return CopilotClient({
        "github_token": user_token,
        "use_logged_in_user": False,
    })

# Usage
client = create_client_for_user("gho_user_access_token")
await client.start()

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-5.4", session_id=f"user-{user_id}-session")

response = await session.send_and_wait("Hello!")
