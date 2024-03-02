'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  MessageIcon,
  QuestionMarkCircleIcon,
  FolderIcon,

} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useSessions, SessionProvider} from '@/app/dashboard/context/sessionContext';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import MyApp from '@/app/_app';
import NewChatButton from '@/app/dashboard/components/new-chat-button';
import ChatSessionPage from '@/app/dashboard/[sessionId]/page';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
  { name: 'Q&A', href: '/dashboard', icon: QuestionMarkCircleIcon },
  { name: 'Histories', href: '/dashboard/histories', icon: FolderIcon },
  // { name: 'new chat', href: '/dashboard/[sessionId]', icon: MessageIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const sessions = useSessions();
  return (
    <>
      <div>
      {sessions?.map((session) => (
        <Link key={session.id} href="app/dashboard/[sessionId]" as={`/app/dashboard/${session.id}`}>
          <a>Session from {session.createdAt}</a>
        </Link>
      ))}
      {/* New Chat 按钮在这里实现*/}
       <nav>
            <NewChatButton />
        </nav>
      </div>

      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
            >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
