/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import { PlusIcon } from "@components/Icons";
import { findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import { Button } from "@webpack/common";
import { User } from "discord-types/general";

import { openReviewsModal } from "./ReviewModal";

const NicknameIconClasses = findByPropsLazy("color", "button", "visible");

const NicknameButton = findComponentByCodeLazy("tooltipDelay", "TooltipContainer", "Button");

const cl = classNameFactory();

export function NicknameIcon({ user, isHovering }: { user: User; isHovering?: boolean; }) {
    return (
        <NicknameButton
            text="View Reviews"
            aria-label="View Reviews"
            icon={PlusIcon}
            color={NicknameIconClasses.color}
            look={Button.Looks.BLANK}
            className={cl(NicknameIconClasses.button, { [NicknameIconClasses.visible]: isHovering })}
            onClick={() => openReviewsModal(user.id, user.username)}
        />
    );
}
