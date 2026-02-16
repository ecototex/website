# COMPLETE DEPLOYMENT GUIDE: Ecototex.com on VPS (Port 8085)

This guide covers the **full setup** from Namecheap to your VPS, ensuring a secure `https://ecototex.com` URL while keeping your backend safe on Port 8085.

---

## Phase 1: Connect Namecheap to Cloudflare

1.  **Add Site**: Go to Cloudflare Dashboard -> **Add a Site** -> Enter `ecototex.com`.
2.  **Select Plan**: Choose the **Free** plan.
3.  **Review DNS**: Cloudflare will scan your records. Click **Continue**.
4.  **Get Nameservers**: Copy the 2 nameservers Cloudflare provides (e.g., `bob.ns.cloudflare.com`).
5.  **Update Namecheap**:
    - Log in to **Namecheap**.
    - Go to **Domain List** -> Click **Manage** next to `ecototex.com`.
    - Find **Nameservers**.
    - Select **Custom DNS** from the dropdown.
    - Paste the 2 Cloudflare nameservers.
    - Click the **Green Checkmark** to save.
6.  **Wait**: It can take 15-30 mins for Namecheap to update. Cloudflare will email you when active.

---

## Phase 2: Deploy to Server (DONE)

Your website code is already running on the server.

- **Server**: `128.140.12.117`
- **Port**: `8085`
- **Status**: **LIVE** at `http://128.140.12.117:8085`

_(If you ever need to re-deploy, just run `./deploy_to_vps.sh` on the server)._

---

## Phase 3: Configure Cloudflare (CRITICAL)

Once Cloudflare is active (Phase 1 complete), do this to link the domain to your server port.

### Step 1: Set the DNS Record

1.  In Cloudflare, go to **DNS** > **Records**.
2.  Add a new record:
    - **Type**: `A`
    - **Name**: `@` (Root)
    - **IPv4 Address**: `128.140.12.117`
    - **Proxy Status**: **Proxied** (Orange Cloud icon must be ON).
    - Click **Save**.

### Step 2: Create the Port Forwarding Rule

This rule tells Cloudflare: _"When someone visits ecototex.com, forward them to port 8085 on the server."_

1.  In the left sidebar, go to **Rules** > **Origin Rules**.
2.  Click **Create Rule**.
3.  **Rule Name**: Enter `Forward to 8085`.
4.  **When incoming requests match...**:
    - Field: `Hostname`
    - Operator: `equals`
    - Value: `ecototex.com`
5.  **Then...**:
    - Select **Destination Port**.
    - Action: **Rewrite to...**
    - Value: `8085`
6.  Click **Deploy**.

---

## Phase 4: Final Verification

- Visit `https://ecototex.com`.
- **Success!** You should see your website (served securely from port 8085).
