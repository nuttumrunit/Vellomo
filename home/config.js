// Woodoo live endpoints (public HTTPS via Cloudflare Tunnel from the host machine).
// NOTE: these are quick-tunnel URLs — temporary, they change on restart. For permanent 24/7,
// switch to a named tunnel on woodcutleaf.com and update the two hostnames below.
window.WOODOO = {
    cam: 'http://127.0.0.1:3007',
    map: 'http://127.0.0.1:8123/index.html?worldname=vellomo-world&mapname=surface&zoom=5&x=0&y=88&z=0',
    data: 'woodoo-live.json',
    offline: false
};
