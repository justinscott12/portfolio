import { Prototype } from '@/lib/prototypes';

interface PrototypeCardProps {
  prototype: Prototype;
}

export default function PrototypeCard({ prototype }: PrototypeCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1 p-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {prototype.title}
          </h3>
          <span className="inline-flex items-center rounded-md bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300">
            Prototype
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {prototype.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {prototype.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {(prototype.link || prototype.githubLink) && (
        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-900/50 flex gap-3">
          {prototype.link && (
            <a
              href={prototype.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm inline-flex items-center"
            >
              View Demo <span className="ml-1">→</span>
            </a>
          )}
          {prototype.githubLink && (
            <a
              href={prototype.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm inline-flex items-center"
            >
              GitHub <span className="ml-1">→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

