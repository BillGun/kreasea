import { Button } from '@/components/ui/button';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './components/page-header';
import { Announcement } from './components/announcements';
import { FAQ } from './components/faq';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { UsernameClaimForm } from './components/username-claim-form';
import { ArrowDownIcon, CloudIcon, LockIcon } from 'lucide-react';
import { BackgroundSvg, BackgroundSvgMobile } from '@/components/icons';

const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowDownIcon,
  },
];

export default async function IndexPage() {
  return (
    <>
      <div
        style={{
          width: '100vw',
          minHeight: '100vh',
          position: 'fixed',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          padding: '120px 24px 160px 24px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            zIndex: 3,
            width: '100%',
            maxWidth: '640px',
            backgroundImage: `radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
                        radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
                        radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
                        radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
                        radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
                        radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
                        radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)`,
            position: 'absolute',
            height: '100%',
            filter: 'blur(100px) saturate(150%)',
            top: '80px',
            opacity: 0.15,
          }}
        ></div>
      </div>

      <div className='relative mx-auto h-[92vh] w-full'>
        <BackgroundSvg className='absolute left-0 top-0 z-0 hidden h-full w-full bg-center object-cover lg:block' />
        <BackgroundSvgMobile className='absolute left-0 top-0 z-0 h-full w-full bg-center object-cover lg:hidden' />
        <PageHeader className='relative z-10 space-y-4 xl:pt-48'>
          <Announcement />
          <PageHeaderHeading className='text-balance'>
            Ruang untuk kamu berkreasi.
          </PageHeaderHeading>
          <PageHeaderDescription>
            Tempat terbaik untuk membuat komunitas dengan fans, dan menerima
            dukungan dari supporter untuk passion kamu!
          </PageHeaderDescription>
          <UsernameClaimForm />
        </PageHeader>
      </div>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7'>Deploy faster</h2>
            <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
              Everything you need to deploy your app
            </p>
            <p className='mt-6 text-lg leading-8'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {features.map((feature) => (
                <div key={feature.name} className='flex flex-col'>
                  <dt className='flex items-center gap-x-3 text-base font-semibold leading-7'>
                    <feature.icon
                      className='h-5 w-5 flex-none'
                      aria-hidden='true'
                    />
                    {feature.name}
                  </dt>
                  <dd className='mt-4 flex flex-auto flex-col text-base leading-7'>
                    <p className='flex-auto'>{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className='relative mx-auto h-screen w-3/5'>
        <PageHeader>
          <PageHeaderHeading className='text-balance'>
            Frequently Asked Questions
          </PageHeaderHeading>
          <PageHeaderDescription className='sm:text-base'>
            Have a different question and can&apos;t find the answer you&apos;re
            looking for? Reach out to our support team by sending us an email
            and we&apos;ll get back to you as soon as we can.
          </PageHeaderDescription>
        </PageHeader>
        <FAQ />
      </div>
      <section className='w-full bg-secondary py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='mx-auto max-w-2xl text-center'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Ready to Unlock Your Creator Potential?
              </h2>
              <p className='text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Join our platform and start monetizing your content, building a
                thriving community, and amplifying your digital presence.
              </p>
            </div>
            <div className='mt-6 flex flex-col justify-center gap-2 min-[400px]:flex-row'>
              <Button asChild>
                <Link href='#'>Get Started</Link>
              </Button>
              <Button variant={'outline'} asChild>
                <Link href='#'>Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
