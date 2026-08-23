import MenuIcon from "../Icon/MenuIcon";
import PlusIcon from "../Icon/PlusIcon";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="flex flex-col gap-6">
      {/* Mobile app bar — flush, full width (breaks out of the page padding) */}
      <div className="-mx-5 -mt-5 flex h-[72px] items-center justify-between bg-surface px-5 sm:hidden">
        <div className="flex items-center gap-3">
          <Button variant="plain" aria-label="Open menu" className="size-6">
            <MenuIcon aria-hidden="true" className="size-6" />
          </Button>
          <span className="text-lg font-bold text-text">TaskFlow</span>
        </div>
        <Button variant="primary" aria-label="Add task" className="size-10">
          <PlusIcon aria-hidden="true" className="size-5" />
        </Button>
      </div>

      {/* Tablet app bar */}
      <div className="hidden items-center justify-between rounded-[18px] border border-border bg-surface px-6 py-5 sm:flex lg:hidden">
        <span className="text-xl font-bold text-text">TaskFlow</span>
        <Button variant="ghost">
          <PlusIcon aria-hidden="true" className="size-4" />
          Add task
        </Button>
      </div>

      {/* Title row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-text sm:text-[28px] lg:text-2xl">
            My Tasks
          </h1>
          <p className="mt-1 hidden text-sm text-text-muted sm:block">
            Manage your work and stay on track.
          </p>
        </div>
        <div className="hidden lg:inline-flex">
          <Button variant="primary" className="h-11 px-4">
            <PlusIcon aria-hidden="true" className="size-4" />
            Add task
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
