const maxTilt = 15

function handleCardMouseMove(event:any, el:any) {
  const rect = el.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const deltaX = x - centerX
  const deltaY = y - centerY

  const percentX = deltaX / centerX
  const percentY = deltaY / centerY

  const rotateY = percentX * maxTilt
  const rotateX = -percentY * maxTilt
  const rotateZ = percentX * -2

  el.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    rotateZ(${rotateZ}deg)
  `
}

function resetCardTilt(el) {
  el.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
}

export function useCardTilt() {
  const onMouseMove = (event:any) => {
    handleCardMouseMove(event, event.currentTarget)
  }

  const onMouseLeave = (event:any) => {
    resetCardTilt(event.currentTarget)
  }

  return {
    onMouseMove,
    onMouseLeave,
  }
}