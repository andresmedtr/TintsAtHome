export const scrollToView = (target: string) => {
  const isEmail = target.includes("@") && target.includes(".");
  const isPhone = target.includes("954");
  const isAnchor = target.startsWith("#");
  const isWhatsapp =
    target.includes("wa.me") || target.includes("api.whatsapp");
  const isLocation = target.includes("maps");
  window.dataLayer = window.dataLayer || [];

  if (isEmail) {
    window.dataLayer.push({ event: "email_click", email: target });
    window.location.href = `mailto:${target}`;
  } else if (isAnchor) {
    const element = document.getElementById(target.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  } else if (isLocation) {
    window.dataLayer.push({ event: "location_click", location: target });
    window.open(target, "_blank");
  } else if (isPhone) {
    window.dataLayer.push({ event: "phone_click", phone: target });
    window.location.href = `tel:${target}`;
  } else if (isWhatsapp) {
    window.dataLayer.push({ event: "whatsapp_click", whatsapp: target });
    window.open(target, "_blank");
  } else {
    window.dataLayer.push({ event: "social_click", social_target: target });
    window.open(target, "_blank");
  }
};
