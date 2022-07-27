import React from "react";

export interface IInput {
    leftIcon: React.ReactNode;
    name: string;
    placeholder?: string;
    type?: string;
    control: any;
}