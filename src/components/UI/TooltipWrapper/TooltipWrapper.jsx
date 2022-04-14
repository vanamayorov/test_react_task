import Tippy from '@tippyjs/react';

const TooltipWrapper = ({ children, content }) => {
  return (
    <Tippy
      content={content}
      arrow={false}
      placement={"bottom"}
      interactive={true}
      offset={[0, 10]}
      maxWidth={'none'}
    >
      {children}
    </Tippy>
  )
}

export { TooltipWrapper };