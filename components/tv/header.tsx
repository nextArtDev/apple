import Link from 'next/link'
import { Button } from './button'
import { Container } from './container'

export const Header = () => {
  return (
    <>
      <header className=" relative z-20 text-white">
        {/* <Container className="flex min-h-[--header-row-height] items-center">
          <Link
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
             <span className="sr-only">Back to homepage</span>
          </Link>
        </Container> */}
      </header>
      {/* how stick element at the top, It sticks to parent room here the first parent is the full page  */}
      <div className=" sticky top-0 z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  )
}
