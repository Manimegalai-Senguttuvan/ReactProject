import {
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

export default function Navbar() {
  const navigate =
    useNavigate();

  const role =
    localStorage.getItem(
      "role"
    );

  const username =
    localStorage.getItem(
      "username"
    );

  const [open, setOpen] =
    useState(false);

  return (
    <div style={styles.nav}>
      <h2
        style={{
          cursor:"pointer"
        }}
        onClick={() =>
          navigate(
            role==="admin"
              ?"/admin-home"
              :"/home"
          )
        }
      >
       SYNTECH PRODUCTS
      </h2>

      <div style={styles.links}>
        {role==="admin" ? (
          <>
            <button
              style={styles.btn}
              onClick={() =>
                navigate(
                  "/admin-home"
                )
              }
            >
              Home
            </button>

            <button
              style={styles.btn}
              onClick={() =>
                navigate(
                  "/create-product"
                )
              }
            >
              Create
            </button>
          </>
        ) : (
          <>
            <button
              style={styles.btn}
              onClick={() =>
                navigate(
                  "/home"
                )
              }
            >
              Home
            </button>

            <button
              style={styles.btn}
              onClick={() =>
                navigate(
                  "/wishlist"
                )
              }
            >
              Wishlist
            </button>

            <button
              style={styles.btn}
              onClick={() =>
                navigate(
                  "/cart"
                )
              }
            >
              Cart
            </button>
          </>
        )}

        <div
          style={styles.profile}
        >
          <div
            onClick={() =>
              setOpen(!open)
            }
          >
            👤 {username}
          </div>

          {open && (
            <div
              style={
                styles.dropdown
              }
            >
              <div
                onClick={() =>
                  navigate(
                    "/profile"
                  )
                }
              >
                Profile
              </div>

              <div
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles={
  nav:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"15px 35px",
    background:
      "rgba(255,255,255,.08)",
    backdropFilter:
      "blur(15px)",
    borderBottom:
      "1px solid rgba(255,255,255,.1)",
    position:"sticky",
    top:0,
    zIndex:100,
  },

  links:{
    display:"flex",
    gap:15,
    alignItems:"center",
  },

  btn:{
    background:
      "rgba(255,255,255,.08)",
    color:"white",
    padding:"10px 18px",
    borderRadius:12,
  },

  profile:{
    position:"relative",
    cursor:"pointer",
  },

  dropdown:{
    position:"absolute",
    top:35,
    right:0,
    width:140,
    background:"#111827",
    borderRadius:15,
   overflow: "visible",
    boxShadow:
      "0 8px 20px rgba(0,0,0,.3)",
  },
};