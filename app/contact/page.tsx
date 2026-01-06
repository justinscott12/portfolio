import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Justin Scott. Email: jscottwv@gmail.com, Phone: (304) 282-4087',
  openGraph: {
    title: 'Contact | Justin Scott',
    description: 'Get in touch with Justin Scott.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:jscottwv@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  jscottwv@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+13042824087"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  (304) 282-4087
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/justin-scott12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  linkedin.com/in/justin-scott12
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  GitHub
                </h3>
                <a
                  href="https://github.com/justinscott12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  github.com/justinscott12
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

