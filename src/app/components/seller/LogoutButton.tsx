'use client'

export default function LogoutButton() {

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

    return (
        <button onClick={handleLogout} className="cursor-pointer">
            Sign Out
        </button>
    );
}