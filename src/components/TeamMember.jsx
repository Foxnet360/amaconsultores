import React from 'react';
import { Mail, Globe, User } from 'lucide-react';

/**
 * TeamMember - Componente reutilizable para mostrar perfiles del equipo
 * 
 * Props:
 * - name: string - Nombre completo
 * - role: string - Cargo/rol
 * - email: string - Email de contacto (opcional)
 * - web: string - Sitio web personal (opcional)
 * - photo: string - URL de la foto (null para placeholder)
 * - initials: string - Iniciales para placeholder (ej: "AM")
 * - placeholderColor: string - Color del placeholder (default: "#4A5568")
 * - bio: string - Biografía/texto aprobado
 * - formacion: string - Formación adicional (opcional)
 */
const TeamMember = ({
  name,
  role,
  email,
  web,
  photo,
  initials,
  placeholderColor = "#4A5568",
  bio,
  formacion,
}) => {
  return (
    <div className="bg-navy-800 border border-white/10 rounded-xl overflow-hidden hover:border-gold-500/30 transition-all">
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar/Photo */}
          <div className="flex-shrink-0">
            {photo ? (
              <img
                src={photo}
                alt={name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gold-500/30"
              />
            ) : (
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4 border-white/10"
                style={{ backgroundColor: placeholderColor }}
              >
                {initials}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-gold-400 font-semibold mb-4">{role}</p>

            {/* Formación */}
            {formacion && (
              <p className="text-white/80 text-sm mb-4 italic">{formacion}</p>
            )}

            {/* Contact */}
            <div className="flex flex-wrap gap-4 mb-6">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors text-sm"
                >
                  <Mail size={16} />
                  {email}
                </a>
              )}
              {web && (
                <a
                  href={`https://${web}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors text-sm"
                >
                  <Globe size={16} />
                  {web}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="prose prose-invert max-w-none">
            {bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-white/80 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;