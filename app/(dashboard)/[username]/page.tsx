import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getUserPostsByUsername, getUserProfileNonStrict } from '@/lib/auth';
import { UsernamePostFeed } from './components/username-post-feed/username-post-feed';

interface UsernamePageProps {
  params: {
    username: string;
  };
}
export default async function UsernamePage({ params }: UsernamePageProps) {
  const user = await getUserProfileNonStrict();
  const posts = await getUserPostsByUsername({ username: params.username });

  return (
    <div className='grid w-full grid-cols-2 gap-4'>
      <div className='col-span-1 flex flex-col pb-8'>
        {posts.length > 0 ? (
          <UsernamePostFeed
            posts={posts}
            sessionUsername={user ? user.username : ''}
          />
        ) : (
          <div className='flex min-h-[30vh] flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
            <div className='flex flex-col items-center gap-1 p-12 py-20 text-center'>
              <h3 className='text-2xl font-bold tracking-tight'>
                Belum ada postingan nih
              </h3>
              <p className='text-sm text-muted-foreground'>
                Yuk ikuti dan dapatkan update terkini!
              </p>
            </div>
          </div>
        )}
      </div>
      <div className='col-span-1'>
        <Card>
          <CardHeader className='space-y-0 py-4'>
            <CardTitle className='text-xl'>Supporter!</CardTitle>
            <CardDescription>
              Support billgun and be a part of our community
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-3'>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center space-x-4'>
                <Avatar>
                  <AvatarImage src='/avatars/01.png' />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-sm font-medium leading-none'>
                    Sofia Davis, mengsupport 10 cendol
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Terus berkarya ya kakak
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src='/avatars/01.png' />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium leading-none'>
                  Asun, mengsupport 1 cendol
                </p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src='/avatars/01.png' />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium leading-none'>
                  Dimas, menjadi patron
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className='p-0 text-base text-muted-foreground underline underline-offset-4'
              variant={'none'}
            >
              Show More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
