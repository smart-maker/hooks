import { useState, useMemo, useCallback } from 'react';

interface StableActions<K> {
  add: (key: K) => void;
  remove: (key: K) => void;
  reset: () => void;
}

interface Actions<K> extends StableActions<K> {
  has: (key: K) => boolean;
}

const useSet = <K>(initialValue?: any): [Set<K>, Actions<K>] => {
  const initialSet = useMemo<Set<K>>(
    () => (initialValue === undefined ? new Set() : new Set([initialValue])) as Set<K>,
    [initialValue]
  );
  const [set, setSet] = useState(initialSet);

  const stableActions = useMemo<StableActions<K>>(
    () => ({
      add: item => setSet(prevSet => new Set([...Array.from(prevSet), item])),
      remove: item => setSet(prevSet => new Set(Array.from(prevSet).filter(i => i !== item))),
      reset: () => setSet(initialSet),
    }),
    [setSet]
  );
  
  const utils = {
    has: useCallback(item => set.has(item), [set]),
    ...stableActions,
  } as Actions<K>;

  return [set, utils];
};

export default useSet;
