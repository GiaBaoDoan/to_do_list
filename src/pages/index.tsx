import * as Tabs from '@radix-ui/react-tabs'
import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import { useState } from 'react'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [activeTab, setActiveTab] = useState('all')
  const statuses = ['all', 'pending', 'completed']
  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root onValueChange={handleTabChange} className="pt-10">
          <Tabs.List className="flex gap-2">
            {statuses.map((status, index) => {
              return (
                <Tabs.Trigger
                  key={index}
                  className={`rounded-full border px-6 py-3 text-sm   ${
                    activeTab === status
                      ? ' bg-gray-700 text-white'
                      : ' border-gray-200 bg-white text-gray-700'
                  }`}
                  value={status}
                >
                  <span className="capitalize">{status}</span>
                </Tabs.Trigger>
              )
            })}
          </Tabs.List>
        </Tabs.Root>
        <div className="pt-10">
          <TodoList
            statuses={
              activeTab === 'all' ? ['completed', 'pending'] : [activeTab]
            }
          />
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
