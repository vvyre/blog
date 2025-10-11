# 스타일 가이드 및 코드 컨벤션

## 네이밍

- `*.tsx`: `PascalCase`
- `*.ts`: `camelCase`
- `*.css.ts`: 범위에 따라 `camelCase` 또는 `PascalCase`, 항상 `import * as css from '*.css'` 형태로 사용

## 아키텍처

```
components/* → features/components/* → features/containers/* → page(app)
```

- **View**: props만 받아 레이아웃 담당
- **Container**: 클라이언트 로직과 상태 정의
- **Data Fetch**: 서버사이드 우선, 필요시 custom hook

## 응집도 (Co-location)

**함께 변경되는 코드는 가까이**

```tsx
// ✅ 한 곳에서만 사용
function UserProfile() {
  type Status = 'active' | 'inactive'
  const COLORS = { active: 'green', inactive: 'gray' }
  // ...
}

// ❌ 불필요한 분리
// types/userProfile.ts
// constants/userProfile.ts
```

**기능 단위로 묶기**

```
features/auth/
  ├── components/
  ├── hooks/
  ├── atoms/
  └── index.ts
```

## 결합도

### 상태 관리

- **UI 상태**: Context (지역 범위)
- **도메인 상태**: Jotai (전역, 도메인 중심)

```tsx
// UI 상태(일시적 상태)는 Context로서 지역 변수로
return (
  <AccordionContext>
    <AccordionItem />
  </AccordionContext>
)

// domain origin 상태는 atom으로
const userAtom = atom<User | null>(null)
```

### Props Drilling

- 2depth 이상의 props drilling은 지양해 주세요.

```tsx
// 이런 경우
function Parent() {
  return <Child /> // Child에서 atom 사용
}

// 이렇게 하지 말고 필요한 곳에서 atom을 구독해 주세요
function Parent({ data }) {
  return <Child data={data} /> // Parent는 안 씀
}
```

### Deps Inversion, Side Effect Injection

```tsx
// Side Effect Fn을 주입하는 식으로 작성하세요
const usePersist = (save: (key: string, value: any) => void) => {
  // save는 외부에서 주입된 부수효과
}

// 사용
usePersist((key, value) => localStorage.setItem(key, value))

// Side Effect가 구현 내부에 강하게 결합되어 있지 않도록 하세요
// localStorage에 의존하는 함수가 되어 테스트와 유지보수가 어렵습니다
const usePersist = () => {
  localStorage.setItem(...)
}
```

## 리뷰 규칙

### 1. 맥락 줄이기

**조건부 렌더링 추상화**

```tsx
// 기존 로그인 로직이 있다면
export function LoginPage() {
  useLogin({ onSuccess: status => { ... }, onFail: (status) => {...} })
  /* ... */
  return <>{/* UI */}</>
}

// 컴포넌트로 추상화합니다

export function WithAuth({ children }) {
  const token = useLogin()
  useEffect(() => {
    if (status === 'OK') router.push('/startPage')
  }, [status])
  /* ... */
  return status !== 'OK' ? children : null
}

<WithAuth>
  <LoginPage />
</WithAuth>

```

### 2. 시점 줄이기

```tsx
// 선언형 프로그래밍
const policy = {
  admin: { canInvite: true, canView: true },
  viewer: { canInvite: false, canView: true },
}[user.role]

// 명령형 프로그래밍
const policy = getPolicyByRole(user.role)
function getPolicyByRole(role) {
  const policy = POLICY_SET[role]
  return {
    canInvite: policy.includes('invite'),
    canView: policy.includes('view'),
  }
}
```

### 3. 순수 함수 분리

```tsx
// 테스트가 용이하게 작성하세요. 순수 함수는 분리해 주세요.
export const calculateTotal = (items: Item[]) => items.reduce((sum, item) => sum + item.price, 0)

export const useCheckout = () => {
  const items = useAtomValue(cartAtom)
  return calculateTotal(items)
}

// 이렇게 하지 마세요
export const useCheckout = () => {
  const items = useAtomValue(cartAtom)
  return items.reduce((sum, item) => sum + item.price, 0)
}
```

## 기타

- 2depth 이상 props drilling 시 atom/context 고려
- 순환 참조 금지
