import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
