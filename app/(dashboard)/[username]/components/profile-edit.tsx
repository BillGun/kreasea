import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { ProfileEditForm } from './profile-edit-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import SocialLinksPage from './social-links';

interface ProfileEditLayoutProps {
  username: string;
}

export async function ProfileEdit({ username }: ProfileEditLayoutProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('user_profiles')
    .select()
    .eq('username', username)
    .single();

  if (error) {
    return;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='max-w-xl p-0'>
        <DialogHeader className='p-6 pb-0'>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <ScrollArea className='max-h-[75vh]'>
          <div className='space-y-8 p-6 pt-0'>
            <ProfileEditForm profile={data} />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='secondary'>Edit Social Links</Button>
              </DialogTrigger>
              <DialogContent className='max-w-xl p-0'>
                <DialogHeader className='p-6 pb-0'>
                  <DialogTitle>Social Links</DialogTitle>
                  <DialogDescription>
                    Add your social accounts to display them on your public
                    profile.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className='max-h-[75vh]'>
                  <div className='pt-2'>
                    <SocialLinksPage />
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
