export const scrollToView = (target: string) => {
  const isEmail = target.includes("@") && target.includes(".");
  const isPhone = target.includes("+1");
  const isAnchor = target.startsWith("#");
  window.dataLayer = window.dataLayer || [];

  if (isEmail) {
    window.dataLayer.push({ event: "email_click", email: target });
    window.location.href = `mailto:${target}`;
  } else if (isAnchor) {
    const element = document.getElementById(target.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  } else if (isPhone) {
    window.dataLayer.push({ event: "phone_click", phone: target });
    window.location.href = `tel:${target}`;
  } else if (target.includes("wa.me") || target.includes("api.whatsapp.com")) {
    window.dataLayer.push({ event: "whatsapp_click", whatsapp: target });
    window.open(target, "_blank");
  } else {
    window.dataLayer.push({ event: "social_click", social_target: target });
    window.open(target, "_blank");
  }
};
