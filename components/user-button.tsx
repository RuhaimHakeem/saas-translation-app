"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "./user-avatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

export const UserButton = ({ session }: { session: Session | null }) => {
  // Session
  if (!session) {
    return (
      <Button variant="outline" onClick={() => signIn()}>
        Sign in
      </Button>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar name={session.user?.name} image={session.user?.image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
