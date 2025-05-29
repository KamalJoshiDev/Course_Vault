import React, { useState } from 'react';

const roadmapData = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    children: [
    
      {
        id: 'unit-1',
        title: 'Unit 1: Stack, Queue, Linked List',
        subtopics: [
          {
            id: 'stack',
            title: 'Stack',
            items: [
              { title: 'Stack Representation (Array & Linked List)', link: 'https://www.geeksforgeeks.org/stack-data-structure/' },
              { title: 'Infix to Postfix', link: 'https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/' }
            ],
          },
          {
            id: 'queue',
            title: 'Queue',
            items: [
              { title: 'Queue Types', link: 'https://www.geeksforgeeks.org/queue-data-structure/' },
              { title: 'Priority Queue', link: 'https://www.geeksforgeeks.org/priority-queue-set-1-introduction/' }
            ],
          },
          {
            id: 'linked-list',
            title: 'Linked List',
            items: [
              { title: 'Singly Linked List', link: 'https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/' },
              { title: 'Doubly Linked List', link: 'https://www.geeksforgeeks.org/doubly-linked-list/' }
            ],
          }
        ]
      },
      {
        id: 'unit-2',
        title: 'Unit 2: Trees & Graphs',
        subtopics: [
          {
            id: 'trees',
            title: 'Trees',
            items: [
              { title: 'Binary Trees', link: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
              { title: 'Huffman Coding', link: 'https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/' }
            ],
          },
          {
            id: 'graphs',
            title: 'Graphs',
            items: [
              { title: 'BFS and DFS', link: 'https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/' },
              { title: 'Dijkstra Algorithm', link: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-graph/' }
            ],
          }
        ]
      },
      {
        id: 'unit-3',
        title: 'Unit 3: Sorting & Complexity',
        subtopics: [
          {
            id: 'sorting',
            title: 'Sorting Algorithms',
            items: [
              { title: 'Quick Sort', link: 'https://www.geeksforgeeks.org/quick-sort/' },
              { title: 'Merge Sort', link: 'https://www.geeksforgeeks.org/merge-sort/' }
            ],
          },
          {
            id: 'complexity',
            title: 'Time & Space Complexity',
            items: [
              { title: 'Big-O Notation', link: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/' }
            ]
          }
        ]
      },
      {
        id: 'unit-4',
        title: 'Unit 4: Searching, AVL, Heap, Hashing',
        subtopics: [
          {
            id: 'searching',
            title: 'Search Trees & Techniques',
            items: [
              { title: 'Binary Search Trees', link: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/' },
              { title: 'AVL Trees', link: 'https://www.geeksforgeeks.org/avl-tree-set-1-insertion/' }
            ]
          },
          {
            id: 'heap-hash',
            title: 'Heap & Hashing',
            items: [
              { title: 'Min Heap', link: 'https://www.geeksforgeeks.org/binary-heap/' },
              { title: 'Hash Functions', link: 'https://www.geeksforgeeks.org/hashing-data-structure/' }
            ]
          }
        ]
      },
      {
        id: 'unit-5',
        title: 'Unit 5: File Structures & Indexed Trees',
        subtopics: [
          {
            id: 'file-structures',
            title: 'File Structures',
            items: [
              { title: 'Sequential & Indexed Files', link: 'https://www.geeksforgeeks.org/file-organization/' }
            ]
          },
          {
            id: 'btrees',
            title: 'B-Trees and B+ Trees',
            items: [
              { title: 'B-Tree', link: 'https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/' },
              { title: 'B+ Tree', link: 'https://www.geeksforgeeks.org/b-tree-vs-b-tree/' }
            ]
          }
        ]
      }
    ],
  },
];

const NodeCard = ({ node, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`ml-${depth * 4} my-2`}>
      <div
        className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`w-5 h-5 mr-2 transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-lg font-medium text-gray-900">{node.title}</span>
      </div>

      {isOpen && node.subtopics && (
        <div className="ml-6 border-l-2 border-indigo-200 pl-4">
          {node.subtopics.map((subtopic) => (
            <div key={subtopic.id}>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg mt-2">
                <span className="text-sm font-semibold text-indigo-600">{subtopic.title}</span>
              </div>
              <ul className="ml-4 mt-2 space-y-1">
                {subtopic.items.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 pl-4 border-l border-gray-200">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-[1rem] hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {isOpen && node.children && (
        <div className="ml-6 border-l-2 border-indigo-200 pl-4">
          {node.children.map((child) => (
            <NodeCard key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            DSA Learning Roadmap
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Follow this structured path to master Data Structures and Algorithms for BCA/MCA students in Uttarakhand
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learning Path</h2>
          <div className="space-y-4">
            {roadmapData.map((node) => (
              <NodeCard key={node.id} node={node} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
