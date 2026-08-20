import menuIcon from '../../assets/icons/menu.svg'

function Header() {
  return (
    <header className="flex flex-col gap-6">
      {/* Mobile app bar — flush, full width */}
      <div className="flex h-[72px] items-center justify-between bg-surface px-5 sm:hidden">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            className="flex size-6 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <img src={menuIcon} alt="" className="size-6" />
          </button>
          <span className="text-lg font-bold text-text">TaskFlow</span>
        </div>
        <button
          type="button"
          aria-label="Add task"
          className="flex size-10 items-center justify-center rounded-md bg-primary text-xl leading-none text-white hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>

      {/* Tablet app bar */}
      <div className="mx-5 hidden items-center justify-between rounded-[18px] border border-border bg-surface px-6 py-5 sm:mx-6 sm:flex lg:hidden">
        <span className="text-xl font-bold text-text">TaskFlow</span>
        <button
          type="button"
          className="text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">+ </span>Add task
        </button>
      </div>

      {/* Title row */}
      <div className="flex items-start justify-between gap-4 px-5 sm:px-6 lg:px-0">
        <div>
          <h1 className="text-[26px] font-bold text-text sm:text-[28px] lg:text-2xl">
            My Tasks
          </h1>
          <p className="mt-1 hidden text-sm text-text-muted sm:block">
            Manage your work and stay on track.
          </p>
        </div>
        <button
          type="button"
          className="hidden h-11 shrink-0 cursor-pointer items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:inline-flex"
        >
          <span aria-hidden="true">+</span> Add task
        </button>
      </div>
    </header>
  )
}

export default Header
