
import TodoList from "./TodoList"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        
        <div className="flex-1">{children}</div>
        <div>
            <TodoList />
        </div>
    </main>
  )
}
