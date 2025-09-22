"use client";

import { CustomButton } from "../customButton";
import { scrollToView } from "@/utils/scrollToView";
import { getSocialMediaMap } from "@/utils/getSocialMediaMap";
import { SocialMediaType } from "@/types/globalTypes";

export const SocialMediaButton = ({ type }: { type: SocialMediaType }) => {
  const media = getSocialMediaMap()[type];
  if (!media) return null;

  return (
    <CustomButton
      classes="w-1 mx-0.5 flex justify-center"
      type="button"
      icon={media.icon}
      onClick={() => {
        scrollToView(media.target);
      }}
    />
  );
};
