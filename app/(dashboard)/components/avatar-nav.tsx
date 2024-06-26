'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { ThemeToggleTab } from '@/components/theme-toggle-tab';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { createClient } from '@/lib/supabase/client';
import { LogOutIcon, MoreHorizontalIcon, UserCogIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface AvatarNavProps {
  profile: {
    username: string;
    name: string;
    avatar_url: string | null;
  };
}

export function AvatarNav({ profile }: AvatarNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    if (!(pathname === '/')) {
      router.push('/');
    }
    return router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex w-full justify-between'>
          <div className='flex w-full justify-start'>
            <Avatar className='mt-1 h-9 w-9'>
              <AvatarImage
                src={profile.avatar_url || ''}
                alt={`${profile.username} avatar`}
              />
              <AvatarFallback>
                {profile.name.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <DropdownMenuLabel className='font-normal '>
              <div className='flex flex-col space-y-1 text-left'>
                <p className='text-sm font-medium leading-none'>
                  {profile.name}
                </p>
                <p className='text-xs leading-none text-muted-foreground'>
                  @{profile.username}
                </p>
              </div>
            </DropdownMenuLabel>
          </div>
          <MoreHorizontalIcon className='h-5 w-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        {/* <DropdownMenuItem className=''>
          <ThemeToggleTab className='w-full' />
        </DropdownMenuItem>
        <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Terms of Use</DropdownMenuItem>
          <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={'/account'}>
              <UserCogIcon className='mr-2 h-4 w-4' />
              My Account
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          <LogOutIcon className='mr-2 h-4 w-4' />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
