import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day.
          </Tool>
          <Tool title="LG UltraGear 27GN95B-B 27 4k 144Hz">
            Pretty good all around 4k monitor for work, video editing, and gaming.
          </Tool>
          <Tool title="Air96 Wireless Mechanical Keyboard">
            My first mechanical keyboard and I’m never going back. I love the
            feel of the keys and the fact that it’s wireless is a huge plus.
          </Tool>
          <Tool title="Logitech MX Master 3S">
            It&apos;s a mouse. 🤷‍♂️ < br />
            Works well. I don&apos;t have strong feelings about it. 
            But, I do like that I can pair it with multiple devices and switch
            between them with a button press.
          </Tool>
          <Tool title="Dark Knight Secretlab TITAN™ Evo">
            Got it cause Batman! It’s a chair. It’s comfortable. I don’t know 😅
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            Used it from the start and I’ve never found a reason to switch.
          </Tool>
          <Tool title="iTerm2">
            Friend of mine recommended it to me years ago and I’ve been using it
            ever since.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Use it to mock up designs for my projects and to create graphics for
            my blog posts.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Rescue Time">
            Track how I spend my time on my computer and phone. It’s been super
            helpful for me to see where I’m spending my time and to make
            adjustments to my schedule.
          </Tool>
          <Tool title="Obsidian">
            I use it to organize my life. I have a page for my goals, a page for
            my projects, a page for my notes, and a page for my blog posts.
          </Tool>
          
        </ToolsSection>
        <ToolsSection title="Fun">
          <Tool title="HDZero FPV Drone">
            I’ve been flying FPV drones for a few years now and it’s one of my
            favorite hobbies. I love the feeling of flying and the challenge of
            learning new tricks.
          </Tool>
          <Tool title="Sony A7IV">
            Love this camera. I use it to shoot concert photography and live performances.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
