import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDbConnected, setIsDbConnected] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      if (!supabase) {
        console.warn("⚠️ Supabase client not initialized.");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          console.error("❌ Supabase error:", error.message);
          setIsDbConnected(false);
        } else {
          console.log(`✅ Supabase Connected! Loaded ${data?.length || 0} projects.`);
          setIsDbConnected(true);
          setProjects(data || []);
        }
      } catch (err) {
        console.error("❌ Error fetching from Supabase:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="portfolio" className="projects-section">
      <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
        <h2 className="text-center text-teal projects-title m-0">
          Portfolio Projects
        </h2>
        {isDbConnected && (
          <span
            className="badge rounded-pill bg-success-subtle text-success border border-success-subtle px-3 py-1"
            style={{ fontSize: "0.8rem" }}
            title="Connected to Supabase"
          >
            ● Live DB
          </span>
        )}
      </div>

      {loading ? (
        <div className="text-center py-5">
          <p className="text-teal fs-4">Loading projects from Supabase...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted fs-5">No projects found. Add projects in Supabase!</p>
        </div>
      ) : (
        <div className="projects-grid mt-4">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-content">
                {proj.image ? (
                  <div className="project-img-wrapper">
                    <img src={proj.image} alt={proj.title} />
                  </div>
                ) : (
                  <div className="project-placeholder-wrapper">
                    <i className="fas fa-laptop-code fa-3x text-teal"></i>
                  </div>
                )}
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
              </div>

              <div className="project-buttons">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project"
                  >
                    Live Demo
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
