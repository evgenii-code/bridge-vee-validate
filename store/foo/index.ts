import { Module } from 'vuex'
import { State } from '..'

export interface ModuleFoo {
  foo: number
}

const moduleFoo: Module<ModuleFoo, State> = {
  state: () => ({
    foo: 1,
  }),
  getters: {
    foo: (state) => state.foo,
  },
  mutations: {
    setFoo: (state, foo: number) => (state.foo = foo),
  },
}

export const { state, getters, mutations } = moduleFoo
