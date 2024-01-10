import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { CalendarDaysIcon, MapPinIcon } from 'lucide-react';
import React from 'react';

interface AboutPageProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
export default async function AboutPage({ params, children }: AboutPageProps) {
  return <div>About a</div>;
}
