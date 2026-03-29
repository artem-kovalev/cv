// ── Mobile nav ──────────────────────────────────────────────
const burger = document.querySelector('.nav-burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true'
  burger.setAttribute('aria-expanded', String(!open))
  navLinks.classList.toggle('open', !open)
  document.body.style.overflow = open ? '' : 'hidden'
})

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false')
    navLinks.classList.remove('open')
    document.body.style.overflow = ''
  })
})

// ── Active nav link on scroll ────────────────────────────────
const sections = document.querySelectorAll('main section[id]')
const navItems = document.querySelectorAll('.nav-links a[href^="#"]')

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((a) => a.classList.remove('active'))
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`)
        if (active) active.classList.add('active')
      }
    })
  },
  { rootMargin: '-40% 0px -55% 0px' }
)

sections.forEach((s) => navObserver.observe(s))

// ── Scroll fade-in animations ────────────────────────────────
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        fadeObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)

document.querySelectorAll('.fade-up').forEach((el) => fadeObserver.observe(el))

// ── Nav background on scroll ─────────────────────────────────
const navBar = document.querySelector('.nav-bar')
window.addEventListener(
  'scroll',
  () => {
    navBar.style.borderBottomColor = window.scrollY > 10 ? 'var(--color-border)' : 'transparent'
  },
  { passive: true }
)
