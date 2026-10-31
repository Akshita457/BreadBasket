import { useEffect, useRef, useState } from "react";

function ProfileMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const initial = user?.name?.trim()?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="profile-menu" ref={menuRef}>
      <button
        type="button"
        className="profile-trigger"
        aria-label="Open profile menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="8" r="4" />
        </svg>
      </button>

      {open && (
        <div className="profile-dropdown">
          <div className="profile-details">
            <span className="profile-initial">{initial}</span>
            <div>
              <strong>{user?.name || "Account"}</strong>
              <small>{user?.email || "Signed in"}</small>
            </div>
          </div>
          <button type="button" className="profile-logout" onClick={onLogout}>
            <span aria-hidden="true">↪</span> Log out
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
