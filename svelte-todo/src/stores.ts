import { writable } from 'svelte/store'
import type { TaskType } from './types'

export const taskList = writable(<TaskType[]>[])