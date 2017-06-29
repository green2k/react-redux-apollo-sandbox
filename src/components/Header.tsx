import * as React from "react";

export interface HeaderProps {numUsers: string}

export const Header = (props: HeaderProps) => <h1>Trusted and loved by {props.numUsers} of Agents and Schools Worldwide.</h1>;
