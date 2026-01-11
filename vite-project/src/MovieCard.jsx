import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavBut } from './FavBut'
import { Modal } from './components/ui/Modal'

export function MovieCard({ id, image, rating, mp4 }) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false)
  const navigate = useNavigate()

  return (
    <button
      className="relative w-[250px] rounded-2xl overflow-hidden
                 bg-neutral-900 shadow-lg hover:scale-105 transition-transform
                 will-change-transform duration-300"
      onClick={() => navigate(`/movie/${id}`)} 
    >
      <img src={image} alt="Movie Poster" className="w-full h-[360px] object-cover" />


      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">
        Рейтинг: {rating}
      </div>
    </button>
  )
}
