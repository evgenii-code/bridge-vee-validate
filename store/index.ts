import type { ActionTree } from 'vuex'
import Vuex from 'vuex'
import type { ModuleFoo } from './foo'

export type State = {
  foo: ModuleFoo
}

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {}

export const store = new Vuex.Store<State>({})
