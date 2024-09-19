import { DocsCode } from '../docs-code'
import { MOST_POPULAR_CODE, SPECIAL_CODE } from '@/content/most-popular'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import Dynamic from './dynamic'

const ModalDocumentation = () => {
  return (
    <Dynamic.Content className='flex h-[98dvh] flex-col gap-2 overflow-hidden bg-background/100 md:max-w-5xl'>
      <DialogTitle className='text-center text-xl font-semibold md:text-left'>
        Documentation
      </DialogTitle>
      <DialogDescription className='hidden'>Documentation</DialogDescription>
      <section className='flex size-full flex-col gap-5 overflow-y-auto overflow-x-hidden py-6 scrollbar-thin max-md:px-4'>
        <div className='grid gap-4'>
          <h2 className='text-md font-sans font-semibold'>Most popular</h2>
          <div className='grid gap-3 px-1.5'>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Default usage
              </h2>
              <DocsCode
                code={`${MOST_POPULAR_CODE.default.tip}\n\n${MOST_POPULAR_CODE.default.path}`}
                language='js'
                format='txt'
              />
            </article>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Custom text <em>(Optional)</em>
              </h2>
              <DocsCode
                code={`${MOST_POPULAR_CODE.text.tip}\n\n${MOST_POPULAR_CODE.text.examples[0]}\n${MOST_POPULAR_CODE.text.examples[1]}`}
                language='js'
                format='txt'
              />
            </article>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Custom type <em>(Optional)</em>
              </h2>
              <DocsCode
                code={`${MOST_POPULAR_CODE.type.tip}\n\n${MOST_POPULAR_CODE.type.path}`}
                language='js'
                format='txt'
              />
            </article>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Custom size <em>(Optional)</em>
              </h2>
              <DocsCode
                code={`${MOST_POPULAR_CODE.size.tip}\n\n${MOST_POPULAR_CODE.size.path}`}
                language='js'
                format='txt'
              />
            </article>
          </div>
        </div>
        <div className='grid gap-4'>
          <h2 className='text-md font-sans font-semibold'>
            Special <em>(Optional)</em>
          </h2>
          <div className='grid gap-2 px-1.5'>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Rounded <em>(Circle)</em>
              </h2>
              <DocsCode
                code={SPECIAL_CODE.rounded}
                language='js'
                format='txt'
              />
            </article>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Color
              </h2>
              <DocsCode
                code={`${SPECIAL_CODE.color.tip}\n\n${SPECIAL_CODE.color.path}`}
                language='js'
                format='txt'
              />
            </article>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Pattern <em>(Dots)</em>
              </h2>
              <DocsCode
                code={SPECIAL_CODE.pattern}
                language='js'
                format='txt'
              />
            </article>
            <article className='flex flex-col gap-1 overflow-hidden'>
              <h2 className='font-mono text-xs font-semibold text-muted-foreground'>
                Emoji
              </h2>
              <DocsCode
                code={`${SPECIAL_CODE.emoji.tip}\n\n${SPECIAL_CODE.emoji.path}`}
                language='js'
                format='txt'
              />
            </article>
          </div>
        </div>
      </section>
    </Dynamic.Content>
  )
}

export { ModalDocumentation }
