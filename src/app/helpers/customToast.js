import toast from "react-hot-toast";

export function customToast(title, icon) {
  return toast(title, {
    icon,
    style: {
      borderRadius: "10px",
      background: "#161b22",
      color: "#858DFF",
    },
  });
}
