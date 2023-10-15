import { createAsyncThunk } from '@reduxjs/toolkit'

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ username, password, email }) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Could not sign up')
    }

    return data
  }
)
