import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get('pasteId')
  const dispatch = useDispatch()

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      dispatch(updateToPastes(paste))
    } else {
      dispatch(addToPastes(paste))
    }

    setTitle('')
    setValue('')
    setSearchParams({})
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      
      {/* Top section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <input
          className="w-full sm:w-2/3 px-4 py-2 rounded-xl border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="w-full sm:w-auto px-6 py-2 rounded-xl bg-blue-600 
                     text-white font-medium hover:bg-blue-700 
                     transition duration-200"
        >
          {pasteId ? 'Update Paste' : 'Create My Paste'}
        </button>
      </div>

      {/* Textarea */}
      <div className="mt-6">
        <textarea
          className="w-full h-[500px] p-4 rounded-xl border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     resize-none"
          value={value}
          placeholder="Enter content here..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Home
